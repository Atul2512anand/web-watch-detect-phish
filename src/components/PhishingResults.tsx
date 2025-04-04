
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Skeleton } from "@/components/ui/skeleton";
import { CircleCheck, AlertCircle } from 'lucide-react';

interface PhishingResultsProps {
  results: {
    isPishing: boolean;
    algorithm: string;
    confidence: number;
    features?: Record<string, any>;
  };
  isLoading: boolean;
}

export const PhishingResults = ({ results, isLoading }: PhishingResultsProps) => {
  if (isLoading) {
    return (
      <div className="space-y-2">
        <Skeleton className="h-8 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  const { isPishing, algorithm, confidence } = results;
  
  return (
    <Card className={isPishing ? "border-red-300 bg-red-50" : "border-green-300 bg-green-50"}>
      <CardHeader className={isPishing ? "text-red-800" : "text-green-800"}>
        <div className="flex items-center gap-2">
          {isPishing ? (
            <AlertCircle className="h-6 w-6" />
          ) : (
            <CircleCheck className="h-6 w-6" />
          )}
          <CardTitle>
            {isPishing ? "Potential Phishing Site Detected" : "Safe Website"}
          </CardTitle>
        </div>
        <CardDescription className={isPishing ? "text-red-700" : "text-green-700"}>
          {algorithm} algorithm - {Math.round(confidence * 100)}% confidence
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <div className="text-lg font-medium">
            {isPishing 
              ? "This URL shows characteristics of phishing websites. Be cautious!" 
              : "This URL appears to be legitimate."}
          </div>
          <div className="w-16 h-16 rounded-full flex items-center justify-center bg-white shadow">
            <div className="text-lg font-bold">
              {Math.round(confidence * 100)}%
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
