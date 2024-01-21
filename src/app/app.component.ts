import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  
  tl = gsap.timeline()
  counter = 0

  nextslide(){
    this.counter += 1
    if (this.counter === 1) {
      this.tl.to('#circleSlider',{
        rotate:'120deg',
        duration : 1,
        ease:'power4.inOut'
      }).to('#image2',{
        rotate:'-120deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image2',{
        duration:1,
        scale:1.6,
        ease:'power4.inOut'
      }, "<" ).to('#textBoxes',{
        duration:1,
        y:-110,
        ease:'power4.inOut'
      }, "<" ).to('#mainBox',{
        backgroundColor: 'rgb(150 20 35)',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image1',{
        duration:1,
        scale:0.5,
        ease:'power4.inOut'
      }, "<" ).to('#image1',{
        rotate:'-120deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image1',{
        duration:0.8,
        filter : 'blur(2px)',
        ease:'power4.inOut'
      }, "-=1.5").to('#image2',{
        duration:0.8,
        filter : 'blur(0)',
        ease:'power4.inOut'
      }, "-=1.5")
    } else if (this.counter === 2) {
      this.tl.to('#circleSlider',{
        rotate:'190deg',
        duration : 1,
        ease:'power4.inOut'
      }).to('#image3',{
        rotate:'-200deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image3',{
        duration:1,
        scale:1.6,
        ease:'power4.inOut'
      }, "<" ).to('#image2',{
        duration:1,
        scale:0.5,
        ease:'power4.inOut'
      }, "<" ).to('#mainBox',{
        backgroundColor: 'rgb(150 80 35)',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#textBoxes',{
        duration:1,
        y:-210,
        ease:'power4.inOut'
      }, "<" ).to('#image2',{
        rotate:'-120deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image3',{
        duration:0.8,
        filter : 'blur(0)',
        ease:'power4.inOut'
      }, "-=1.5").to('#image2',{
        duration:0.8,
        filter : 'blur(2px)',
        ease:'power4.inOut'
      }, "-=1.5")
    } 
  }

  prevslide(){
    this.counter -= 1

    if (this.counter === 0) {
      this.tl.to('#circleSlider',{
        rotate:'0deg',
        duration : 1,
        ease:'power4.inOut'
      }).to('#image2',{
        rotate:'0deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#mainBox',{
        backgroundColor: 'rgb(100 116 139)',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#textBoxes',{
        duration:1,
        y:0,
        ease:'power4.inOut'
      }, "<" ).to('#image2',{
        duration:1,
        scale:1,
        ease:'power4.inOut'
      }, "<" ).to('#image1',{
        duration:1,
        scale:1,
        ease:'power4.inOut'
      }, "<" ).to('#image1',{
        rotate:'0deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image1',{
        duration:0.8,
        filter : 'blur(0)',
        ease:'power4.inOut'
      }, "-=1.5").to('#image2',{
        duration:0.8,
        filter : 'blur(2px)',
        ease:'power4.inOut'
      }, "-=1.5")
    } else if (this.counter === 1) {
      this.tl.to('#circleSlider',{
        rotate:'120deg',
        duration : 1,
        ease:'power4.inOut'
      }).to('#image3',{
        rotate:'0deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image3',{
        duration:1,
        scale:1,
        ease:'power4.inOut'
      }, "<" ).to('#mainBox',{
        backgroundColor: 'rgb(150 20 35)',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#textBoxes',{
        duration:1,
        y:-110,
        ease:'power4.inOut'
      }, "<" ).to('#image2',{
        duration:1,
        scale:1.6,
        ease:'power4.inOut'
      }, "<" ).to('#image2',{
        rotate:'-120deg',
        duration:1,
        ease:'power4.inOut'
      }, "<").to('#image3',{
        duration:0.8,
        filter : 'blur(2px)',
        ease:'power4.inOut'
      }, "-=1.5").to('#image2',{
        duration:0.8,
        filter : 'blur(0)',
        ease:'power4.inOut'
      }, "-=1.5")
    } 
  }
}
