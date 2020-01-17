pipeline {
    agent {
        docker {
            image 'alephnode/jenkins-aws-typescript:v1.0.0'
        }
    }
    environment {
        CI = 'true'
        AWS_ACCESS_KEY_ID = credentials('jenkins-aws-secret-key-id')
        AWS_SECRET_ACCESS_KEY = credentials('jenkins-aws-secret-access-key')
    }
    stages {
        stage('Build') {
            steps {
                sh 'echo "Installing dependencies"'
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
                sh 'echo "Deploying build"'
                sh 'chmod +x deploy.sh'
                sh './deploy.sh'
            }
        }
    }
}