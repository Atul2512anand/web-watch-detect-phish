
import React, { useState } from 'react';
import { Layout } from '@/components/Layout';
import { PhishingDetectorForm } from '@/components/PhishingDetectorForm';
import { PhishingResults } from '@/components/PhishingResults';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Info } from 'lucide-react';

const PhishingDetector = () => {
  const [results, setResults] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-6">Phishing URL Detection</h1>
        <p className="text-slate-600 text-center mb-8">
          Test our ML algorithms on potentially suspicious URLs
        </p>

        <Alert className="mb-6">
          <Info className="h-4 w-4" />
          <AlertTitle>Client-side processing</AlertTitle>
          <AlertDescription>
            All processing happens in your browser - no data is sent to external servers.
          </AlertDescription>
        </Alert>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>URL Analyzer</CardTitle>
            <CardDescription>
              Enter a URL to analyze its features and detect if it's a potential phishing site
            </CardDescription>
          </CardHeader>
          <CardContent>
            <PhishingDetectorForm setResults={setResults} setIsLoading={setIsLoading} />
          </CardContent>
        </Card>

        {results && (
          <Tabs defaultValue="results" className="mb-10">
            <TabsList className="grid grid-cols-2 mb-4">
              <TabsTrigger value="results">Detection Results</TabsTrigger>
              <TabsTrigger value="features">URL Features</TabsTrigger>
            </TabsList>
            
            <TabsContent value="results">
              <PhishingResults results={results} isLoading={isLoading} />
            </TabsContent>
            
            <TabsContent value="features">
              <Card>
                <CardHeader>
                  <CardTitle>Extracted Features</CardTitle>
                  <CardDescription>Features analyzed by our algorithms</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(results.features || {}).map(([key, value]) => (
                      <div key={key} className="flex justify-between border-b pb-2">
                        <span className="font-medium">{key}</span>
                        <span className="text-slate-600">{String(value)}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        )}
      </div>
    </Layout>
  );
};

export default PhishingDetector;
