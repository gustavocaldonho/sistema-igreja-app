const { withDangerousMod } = require('@expo/config-plugins');
const fs = require('fs');
const path = require('path');

module.exports = function withModularFirebase(config) {
  return withDangerousMod(config, [
    'ios',
    async (config) => {
      const podfilePath = path.join(config.modRequest.projectRoot, 'ios', 'Podfile');
      let podfileContent = fs.readFileSync(podfilePath, 'utf8');

      const firebasePods = `
        pod 'Firebase', :modular_headers => true
        pod 'FirebaseCore', :modular_headers => true
        pod 'FirebaseCoreInternal', :modular_headers => true
        pod 'GoogleUtilities', :modular_headers => true
        $RNFirebaseAsStaticFramework = true
        `;

      // Insere os pods após o 'use_react_native!' se ainda não estiverem presentes
      if (!podfileContent.includes("modular_headers => true")) {
        podfileContent = podfileContent.replace(
          /use_react_native!\([^)]+\)/,
          (match) => `${match}\n${firebasePods}`
        );
        fs.writeFileSync(podfilePath, podfileContent);
      }

      return config;
    },
  ]);
};
