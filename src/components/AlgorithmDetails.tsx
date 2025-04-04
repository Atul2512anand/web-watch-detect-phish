
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  CircleHelp,
  Trees,
  Network,
  PieChart,
  BarChartBig,
  Sigma
} from 'lucide-react';

export const AlgorithmDetails = () => {
  const algorithms = [
    {
      id: 'knn',
      name: 'K-Nearest Neighbors',
      icon: Network,
      description: 'KNN classifies a website based on the majority class of its k nearest neighbors in the feature space.',
      strengths: [
        'Simple and intuitive algorithm',
        'No training phase required',
        'Works well with smaller datasets'
      ],
      weaknesses: [
        'Computationally expensive for large datasets',
        'Performance depends on feature scaling',
        'Needs optimal K value selection'
      ],
      howItWorks: 'KNN calculates the distance between a new website\'s features and all training examples. It then identifies the K closest examples and assigns the majority class (phishing or legitimate) to the new website.'
    },
    {
      id: 'naive-bayes',
      name: 'Naive Bayes',
      icon: PieChart,
      description: 'Naive Bayes applies Bayes\' theorem with an assumption of independence between features.',
      strengths: [
        'Fast training and prediction',
        'Works well with high-dimensional data',
        'Effective even with smaller training sets'
      ],
      weaknesses: [
        'Assumes feature independence (often not true)',
        'Less accurate than more complex models',
        'Sensitive to irrelevant features'
      ],
      howItWorks: 'Naive Bayes calculates the probability of a website being phishing or legitimate by multiplying the conditional probabilities of each feature given the class, then applying Bayes\' theorem.'
    },
    {
      id: 'adaboost',
      name: 'AdaBoost',
      icon: Sigma,
      description: 'AdaBoost combines multiple "weak" classifiers to create a strong classifier for phishing detection.',
      strengths: [
        'High accuracy when properly tuned',
        'Less prone to overfitting',
        'Automatically identifies important features'
      ],
      weaknesses: [
        'Sensitive to noisy data and outliers',
        'Can be slower to train than simpler methods',
        'May underperform with insufficient data'
      ],
      howItWorks: 'AdaBoost builds multiple decision trees sequentially, with each new tree focusing more on the examples misclassified by previous trees. It weighs each tree\'s vote based on its accuracy.'
    },
    {
      id: 'sgd',
      name: 'Stochastic Gradient Descent',
      icon: BarChartBig,
      description: 'SGD is an optimization method used to train various linear models for phishing detection.',
      strengths: [
        'Efficient for large-scale learning problems',
        'Scales well with high-dimensional feature spaces',
        'Supports various loss functions'
      ],
      weaknesses: [
        'Requires careful tuning of learning rate',
        'Sensitive to feature scaling',
        'May converge to local minima'
      ],
      howItWorks: 'SGD iteratively updates model parameters in the direction of the negative gradient, using one random training example at a time to approximate the true gradient.'
    },
    {
      id: 'random-forest',
      name: 'Random Forest',
      icon: Trees,
      description: 'Random Forest builds multiple decision trees and merges their predictions for robust phishing detection.',
      strengths: [
        'Highest accuracy among common algorithms',
        'Resistant to overfitting',
        'Handles large feature sets well',
        'Provides feature importance metrics'
      ],
      weaknesses: [
        'More computationally intensive than single models',
        'Less interpretable than simple decision trees',
        'Requires more memory'
      ],
      howItWorks: 'Random Forest creates many decision trees using random subsets of features and training data. Each tree "votes" on whether a website is phishing, and the majority vote determines the final classification.'
    },
    {
      id: 'decision-tree',
      name: 'Decision Tree',
      icon: CircleHelp,
      description: 'Decision Tree creates a flowchart-like structure to classify websites based on their features.',
      strengths: [
        'Highly interpretable results',
        'Handles both numerical and categorical data',
        'Requires little data preprocessing'
      ],
      weaknesses: [
        'Prone to overfitting with complex trees',
        'Can be unstable (small changes in data can change the tree)',
        'May create biased trees with imbalanced datasets'
      ],
      howItWorks: 'Decision Trees repeatedly split the data based on feature values that best separate phishing from legitimate websites. Each path from root to leaf represents a decision rule for classification.'
    }
  ];

  return (
    <section id="algorithms" className="py-12">
      <h2 className="text-3xl font-bold text-center mb-4">ML Algorithms Explained</h2>
      <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
        Understanding how different machine learning algorithms approach phishing website detection
      </p>
      
      <Tabs defaultValue="random-forest" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
          {algorithms.map((algo) => (
            <TabsTrigger key={algo.id} value={algo.id} className="flex flex-col items-center py-2">
              <algo.icon className="h-5 w-5 mb-1" />
              <span className="text-xs">{algo.name.split(' ')[0]}</span>
            </TabsTrigger>
          ))}
        </TabsList>
        
        {algorithms.map((algo) => (
          <TabsContent key={algo.id} value={algo.id}>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-slate-100 p-3 rounded-full">
                  <algo.icon className="h-8 w-8 text-slate-700" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{algo.name}</CardTitle>
                  <CardDescription className="text-base">{algo.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-teal-700">Strengths</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {algo.strengths.map((strength, idx) => (
                        <li key={idx}>{strength}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-red-700">Weaknesses</h4>
                    <ul className="list-disc list-inside text-slate-600 space-y-1">
                      {algo.weaknesses.map((weakness, idx) => (
                        <li key={idx}>{weakness}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-blue-700">How It Works</h4>
                    <p className="text-slate-600">{algo.howItWorks}</p>
                  </div>
                </div>
                
                {algo.id === 'random-forest' && (
                  <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-bold text-green-800 mb-2">Why is Random Forest often preferred?</h4>
                    <p className="text-slate-700">
                      Random Forest consistently achieves the highest accuracy in phishing detection by combining multiple decision trees, reducing overfitting, and effectively handling the diverse feature set from websites. Its ensemble approach makes it more robust against noise in the data.
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-12 bg-slate-800 text-white p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Practical Implementation</h3>
        <div className="bg-slate-900 p-4 rounded text-sm font-mono overflow-x-auto">
          <p className="text-green-400"># Python example for Random Forest implementation</p>
          <p className="text-blue-400">from sklearn.ensemble import RandomForestClassifier</p>
          <p className="text-blue-400">from sklearn.model_selection import train_test_split</p>
          <p className="text-blue-400">from sklearn.metrics import accuracy_score, classification_report</p>
          <br />
          <p className="text-purple-400">def train_random_forest_model(X, y):</p>
          <p className="text-white ml-4"># Split data into training and testing sets</p>
          <p className="text-teal-400 ml-4">X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.3, random_state=42)</p>
          <br />
          <p className="text-white ml-4"># Create and train the Random Forest model</p>
          <p className="text-teal-400 ml-4">model = RandomForestClassifier(n_estimators=100, max_depth=10)</p>
          <p className="text-teal-400 ml-4">model.fit(X_train, y_train)</p>
          <br />
          <p className="text-white ml-4"># Evaluate the model</p>
          <p className="text-teal-400 ml-4">predictions = model.predict(X_test)</p>
          <p className="text-teal-400 ml-4">accuracy = accuracy_score(y_test, predictions)</p>
          <p className="text-teal-400 ml-4">report = classification_report(y_test, predictions)</p>
          <br />
          <p className="text-purple-400 ml-4">return model, accuracy, report</p>
        </div>
      </div>
    </section>
  );
};
