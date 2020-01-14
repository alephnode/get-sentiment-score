pipeline {
    agent any
    tools {nodejs "node"}
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
        stage('Deploy') {
            steps {
                sh 'echo "Running deploy script"'
                sh 'npm run deploy'
            }
        }
    }
}