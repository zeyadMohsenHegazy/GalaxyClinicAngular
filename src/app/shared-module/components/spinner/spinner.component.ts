import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/services/Loader/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {
  showSpinner: boolean = true;
  constructor(private loader: LoaderService, private cdRef: ChangeDetectorRef){}

  ngOnInit(): void {
    
    this.init();
  }
  init(){
    this.loader.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }
}
