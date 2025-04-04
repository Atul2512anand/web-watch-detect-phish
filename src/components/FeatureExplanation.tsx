
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Check, X, AlertTriangle, Link, Globe, Clock, Shield, Database, Code } from 'lucide-react';

export const FeatureExplanation = () => {
  const features = [
    {
      name: 'URL Length',
      description: 'Phishing URLs tend to be unusually long to obscure the actual destination.',
      icon: Link,
      example: 'https://legitimate-bank.com/signin vs. https://legitimate-bank.secure-verification.random-domain.info/signin/confirm/secure/id=123456789',
      important: true
    },
    {
      name: 'Domain Age',
      description: 'Phishing domains are usually newly registered, often less than 6 months old.',
      icon: Clock,
      example: 'Creation date: 2 days ago vs. Creation date: 15 years ago',
      important: true
    },
    {
      name: 'HTTPS Certificate',
      description: 'Legitimate sites typically have valid SSL certificates from trusted authorities.',
      icon: Shield,
      example: 'No HTTPS or expired certificate vs. Valid certificate from trusted CA',
      important: true
    },
    {
      name: 'Number of Subdomains',
      description: 'Phishing URLs often contain multiple subdomains to appear legitimate.',
      icon: Globe,
      example: 'login.bank.com vs. login.bank.secure.account.malicious-domain.com',
      important: false
    },
    {
      name: 'Presence of Special Characters',
      description: 'Phishing URLs often use special characters to mimic legitimate URLs.',
      icon: Code,
      example: 'paypal.com vs. paypa1.com or paypal-secure.com',
      important: true
    },
    {
      name: 'Website Content Analysis',
      description: 'Analyzing HTML/CSS for phishing indicators like login forms, brand elements, etc.',
      icon: Database,
      example: 'Copied bank login page with incorrect fonts vs. Legitimate bank website',
      important: false
    }
  ];

  return (
    <section id="features" className="py-12 bg-slate-100 rounded-xl p-8 my-12">
      <h2 className="text-3xl font-bold text-center mb-2">Key Features Used in Detection</h2>
      <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
        Machine learning algorithms analyze these website and URL characteristics to determine if a site is likely to be phishing.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature) => (
          <Card key={feature.name} className={feature.important ? "border-l-4 border-l-teal-500" : ""}>
            <CardHeader className="flex flex-row items-center gap-4">
              <div className={`p-2 rounded-full ${feature.important ? 'bg-teal-100 text-teal-700' : 'bg-slate-100 text-slate-700'}`}>
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <CardTitle className="text-lg">{feature.name}</CardTitle>
                <CardDescription>{feature.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-slate-700">
                <strong>Example:</strong> {feature.example}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-bold mb-4">How Features Are Processed</h3>
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="bg-teal-50 rounded-lg p-4 border border-teal-200">
              <h4 className="font-medium text-teal-800 mb-2">Feature Extraction</h4>
              <p className="text-slate-700 text-sm">
                ML algorithms first extract these features from website data, transforming them into numerical values that can be processed mathematically.
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
              <h4 className="font-medium text-blue-800 mb-2">Feature Normalization</h4>
              <p className="text-slate-700 text-sm">
                Features are scaled to standard ranges to ensure no single feature dominates the model's decision-making process.
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
              <h4 className="font-medium text-purple-800 mb-2">Feature Importance</h4>
              <p className="text-slate-700 text-sm">
                Algorithms like Random Forest can determine which features are most important for accurate phishing detection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
