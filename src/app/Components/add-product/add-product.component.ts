import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  constructor(private Api: ApiService) { }

  ngOnInit(): void {
  }

  onSubmit(form: any) {

    this.Api.addProduct(form.value).subscribe((res) => {
      alert("Product Added Check Console")
      console.log(res);
    })
  }

}
