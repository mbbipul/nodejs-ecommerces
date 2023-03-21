pipeline {
    checkout scm
    agent { dockerfile true }
    stages {
        stage('Git checkout') {
            steps {
                git 'https://github.com/mbbipul/nodejs-ecommerces.git'
            }
        }
        stage('Docker build') {
            steps {
                sh 'docker build -t node_ecommerce .' 
            }
        }
    }
}