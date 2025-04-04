
import React, { useState } from 'react';
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { detectPhishing } from "@/lib/phishing-detection";

const formSchema = z.object({
  url: z.string().url("Please enter a valid URL").min(1, { message: "URL is required" }),
  algorithm: z.string(),
});

interface PhishingDetectorFormProps {
  setResults: React.Dispatch<React.SetStateAction<any>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

export const PhishingDetectorForm = ({ setResults, setIsLoading }: PhishingDetectorFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
      algorithm: "random-forest",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const result = await detectPhishing(values.url, values.algorithm);
      setResults(result);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL to analyze</FormLabel>
              <FormControl>
                <Input placeholder="https://example.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="algorithm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ML Algorithm</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select algorithm" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="knn">K-Nearest Neighbors</SelectItem>
                  <SelectItem value="naive-bayes">Naive Bayes</SelectItem>
                  <SelectItem value="adaboost">AdaBoost</SelectItem>
                  <SelectItem value="sgd">Stochastic Gradient Descent</SelectItem>
                  <SelectItem value="random-forest">Random Forest</SelectItem>
                  <SelectItem value="decision-tree">Decision Tree</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button type="submit" className="w-full">Analyze URL</Button>
      </form>
    </Form>
  );
};
