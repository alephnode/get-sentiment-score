pipeline {
    agent {
        docker {
            image 'node:latest'
        }
    }
    environment {
        CI = 'true'
    }
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
                timeout(time: 3, unit: 'MINUTES') {
                    retry(5) {
                        sh 'echo "Running tests"'
                        sh './deploy.sh'
                    }
                }
            }
        }
    }
}