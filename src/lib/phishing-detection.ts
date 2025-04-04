
/**
 * This is a simplified client-side implementation of phishing detection.
 * In a real-world application, you would likely:
 * 1. Use a pre-trained model loaded from a file
 * 2. Have more sophisticated feature extraction
 * 3. Have better model training capabilities
 */

// Simple feature extraction from URLs
const extractFeatures = (url: string) => {
  const urlObj = new URL(url);
  const domain = urlObj.hostname;
  
  // Simple features (these would be much more sophisticated in a real system)
  const features = {
    domainLength: domain.length,
    hasSubdomain: domain.split('.').length > 2,
    hasHttps: url.startsWith('https://'),
    pathLength: urlObj.pathname.length,
    hasSpecialChars: /[^a-zA-Z0-9.-]/.test(domain),
    hasNumbers: /[0-9]/.test(domain),
    hasDash: domain.includes('-'),
    tldLength: domain.split('.').pop()?.length || 0,
    queryParamCount: urlObj.searchParams.toString().length > 0 ? urlObj.searchParams.toString().split('&').length : 0,
    domainDotsCount: (domain.match(/\./g) || []).length,
  };

  return features;
};

// Extract normalized features as a numeric array for model usage
const normalizeFeatures = (features: any) => {
  const {
    domainLength, hasSubdomain, hasHttps, pathLength, 
    hasSpecialChars, hasNumbers, hasDash, tldLength, 
    queryParamCount, domainDotsCount
  } = features;
  
  // Normalize values (this would be based on training data statistics in a real model)
  return [
    Math.min(domainLength / 30, 1), // Normalize domain length
    hasSubdomain ? 1 : 0,
    hasHttps ? 0 : 1, // Non-HTTPS is suspicious
    Math.min(pathLength / 50, 1),
    hasSpecialChars ? 1 : 0,
    hasNumbers ? 1 : 0,
    hasDash ? 1 : 0,
    Math.min(tldLength / 10, 1),
    Math.min(queryParamCount / 5, 1),
    Math.min(domainDotsCount / 5, 1)
  ];
};

// Simulated ML models
// In a real implementation, these would use actual ML libraries or WebAssembly

// K-Nearest Neighbors
const knnModel = (features: number[]) => {
  // Simplified KNN - higher score for phishing patterns
  const score = features[1] * 0.2 + features[2] * 0.3 + features[4] * 0.15 +
                features[6] * 0.15 + features[9] * 0.2;
  return { isPishing: score > 0.5, confidence: score };
};

// Naive Bayes
const naiveBayesModel = (features: number[]) => {
  // Simplified NB with feature probability weights
  const score = features[0] * 0.1 + features[1] * 0.2 + features[2] * 0.3 +
                features[4] * 0.15 + features[5] * 0.1 + features[8] * 0.15;
  return { isPishing: score > 0.45, confidence: score };
};

// AdaBoost
const adaBoostModel = (features: number[]) => {
  // Simplified AdaBoost with weighted classifiers
  const classifier1 = features[2] * 0.4;
  const classifier2 = features[1] * 0.3 + features[9] * 0.3;
  const classifier3 = features[4] * 0.2 + features[6] * 0.2 + features[0] * 0.1;
  const score = (classifier1 + classifier2 + classifier3) / 3;
  return { isPishing: score > 0.48, confidence: score };
};

// SGD
const sgdModel = (features: number[]) => {
  // Simplified linear model with weights
  const weights = [0.1, 0.2, 0.35, 0.05, 0.15, 0.1, 0.15, 0.05, 0.1, 0.25];
  let score = 0;
  for (let i = 0; i < features.length; i++) {
    score += features[i] * weights[i];
  }
  // Apply sigmoid to get probability
  const confidence = 1 / (1 + Math.exp(-score + 0.5));
  return { isPishing: confidence > 0.5, confidence };
};

// Random Forest
const randomForestModel = (features: number[]) => {
  // Simplified random forest with multiple decision trees
  const tree1 = features[2] > 0.5 && features[4] > 0.5 ? 0.8 : 0.2;
  const tree2 = features[1] > 0.5 && features[9] > 0.5 ? 0.7 : 0.3;
  const tree3 = features[0] > 0.6 || features[5] > 0.5 ? 0.6 : 0.4;
  const tree4 = features[6] > 0.5 && features[8] > 0.5 ? 0.75 : 0.25;
  
  const score = (tree1 + tree2 + tree3 + tree4) / 4;
  return { isPishing: score > 0.55, confidence: score };
};

// Decision Tree
const decisionTreeModel = (features: number[]) => {
  // Simplified decision tree logic
  if (features[2] > 0.5) { // If no HTTPS
    if (features[1] > 0.5) { // Has subdomain
      return { isPishing: true, confidence: 0.85 };
    } else if (features[4] > 0.5) { // Has special chars
      return { isPishing: true, confidence: 0.75 };
    } else {
      return { isPishing: true, confidence: 0.6 };
    }
  } else if (features[0] > 0.7 && features[5] > 0.5) { // Long domain with numbers
    return { isPishing: true, confidence: 0.65 };
  } else if (features[9] > 0.6) { // Many dots in domain
    return { isPishing: true, confidence: 0.7 };
  }
  
  return { isPishing: false, confidence: 0.8 };
};

// Main detection function
export const detectPhishing = async (url: string, algorithm: string) => {
  try {
    // Extract and normalize features
    const features = extractFeatures(url);
    const normalizedFeatures = normalizeFeatures(features);
    
    // Add a small delay to simulate processing time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let result;
    
    // Apply selected algorithm
    switch (algorithm) {
      case 'knn':
        result = knnModel(normalizedFeatures);
        break;
      case 'naive-bayes':
        result = naiveBayesModel(normalizedFeatures);
        break;
      case 'adaboost':
        result = adaBoostModel(normalizedFeatures);
        break;
      case 'sgd':
        result = sgdModel(normalizedFeatures);
        break;
      case 'random-forest':
        result = randomForestModel(normalizedFeatures);
        break;
      case 'decision-tree':
        result = decisionTreeModel(normalizedFeatures);
        break;
      default:
        result = randomForestModel(normalizedFeatures);
    }
    
    // Return results with features
    return {
      ...result,
      algorithm: algorithm,
      features
    };
  } catch (error) {
    console.error('Error detecting phishing:', error);
    throw error;
  }
};
