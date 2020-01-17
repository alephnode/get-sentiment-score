pipeline {
    agent {
        docker {
            image 'srmward/jenkins-aws-typescript:latest'
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
                sh 'echo "Installing deps"'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                sh 'npm run test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'chmod +x deploy.sh'
                sh './deploy.sh'
            }
        }
    }
}