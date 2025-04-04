
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export const AlgorithmComparison = () => {
  // Example data - in a real application, this would come from actual ML model evaluations
  const performanceData = [
    {
      name: 'KNN',
      accuracy: 92,
      precision: 94,
      recall: 90,
      f1Score: 92,
      color: '#3b82f6'
    },
    {
      name: 'Naive Bayes',
      accuracy: 88,
      precision: 86,
      recall: 91,
      f1Score: 88,
      color: '#10b981'
    },
    {
      name: 'AdaBoost',
      accuracy: 93,
      precision: 92,
      recall: 94,
      f1Score: 93,
      color: '#f97316'
    },
    {
      name: 'SGD',
      accuracy: 85,
      precision: 83,
      recall: 86,
      f1Score: 84,
      color: '#8b5cf6'
    },
    {
      name: 'Random Forest',
      accuracy: 96,
      precision: 95,
      recall: 97,
      f1Score: 96,
      color: '#14b8a6'
    },
    {
      name: 'Decision Tree',
      accuracy: 89,
      precision: 87,
      recall: 90,
      f1Score: 88,
      color: '#f43f5e'
    }
  ];

  return (
    <section id="comparison" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Algorithm Performance Comparison</h2>
      
      <Card>
        <CardHeader>
          <CardTitle>Performance Metrics Comparison</CardTitle>
          <CardDescription>
            Comparing accuracy, precision, recall and F1-score across different ML algorithms for phishing detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={performanceData}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[50, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="accuracy" name="Accuracy (%)" fill="#3b82f6" />
                <Bar dataKey="precision" name="Precision (%)" fill="#10b981" />
                <Bar dataKey="recall" name="Recall (%)" fill="#f97316" />
                <Bar dataKey="f1Score" name="F1-Score (%)" fill="#8b5cf6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-blue-600">Best Accuracy</CardTitle>
            <CardDescription>Random Forest - 96%</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              Random Forest achieves the highest accuracy by combining multiple decision trees and reducing overfitting.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-teal-600">Best Precision</CardTitle>
            <CardDescription>Random Forest - 95%</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              High precision means fewer false positives - legitimate websites incorrectly flagged as phishing.
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="text-orange-600">Best Recall</CardTitle>
            <CardDescription>Random Forest - 97%</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-slate-600">
              High recall means the algorithm catches most phishing sites, reducing the risk to users.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
