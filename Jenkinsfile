pipeline {
  agent none

  options {
    timestamps()
    disableConcurrentBuilds()
    preserveStashes(buildCount: 5)
  }

  environment {
    AWS_DEFAULT_REGION='eu-west-1'
  }

  stages {
    stage('Build') {
      when {
        beforeAgent true
        branch 'master'
      }

      agent { node { label 'deploy-as24dev-node' } }

      steps {
        sh 'echo "Build some stuff..."'
        sh './build.sh'
        // stash includes: 'dist/**/*', name: 'output-dist'
      }
    }

    stage('DeployDev') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH="develop"
      }

      agent { node { label 'deploy-as24dev-node' } }

      steps {
        // unstash 'output-dist'
        sh 'echo "DeployDev..."'
        sh './deploy.sh'
      }
    }

    stage('DeployProd') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH="master"
      }

      agent { node { label 'deploy-as24dev-node' } }

      steps {
        sh 'echo "DeployProd..."'
      }
    }
  }
}
