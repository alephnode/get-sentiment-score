pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                sh 'echo "Installing deps"'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'echo "Running tests"'
                sh 'npm run test'
            }
        }
    }
}