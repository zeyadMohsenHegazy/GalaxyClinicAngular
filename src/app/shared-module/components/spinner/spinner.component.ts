import { Component } from '@angular/core';
import { LoaderService } from 'src/services/Loader/loader.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent {
  constructor(private loader: LoaderService){}
}
