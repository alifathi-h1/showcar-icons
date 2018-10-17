pipeline {
  agent none

  options {
    timestamps()
    disableConcurrentBuilds()
  }

  environment {
    AWS_DEFAULT_REGION='eu-west-1'
  }

  stages {
    stage('Build + DeployDev') {
      when {
        beforeAgent true
        branch 'master'
      }

      environment {
        BRANCH="test"
      }

      agent { node { label 'deploy-as24dev-node' } }

      steps {
        sh 'echo "Build some stuff..."'
        sh './build.sh'
      }
    }

    // stage('DeployProd') {
    //   when {
    //     beforeAgent true
    //     branch 'release'
    //   }

    //   environment {
    //     BRANCH="master"
    //   }

    //   agent { node { label 'deploy-as24dev' } }

    //   steps {
    //     sh 'echo "Deploying..."'
    //   }
    // }
  }
}
