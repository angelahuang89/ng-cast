angular.module('video-player')

  .component('app', {
    templateUrl: 'src/templates/app.html',
    
    controller: function() {      
      this.videos = window.exampleVideoData;
      this.onClick = () => {};
      this.currentVideo = this.videos[0];
    }
  });
