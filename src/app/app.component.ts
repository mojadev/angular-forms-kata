import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { OuterSubscriber } from 'rxjs/internal/OuterSubscriber';
import { Customer } from './domain';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  customer = {} as Customer;

  @Output()
  onSubmit = new EventEmitter<Customer>();

  submitForm() {
    console.log(this.customer);
    this.onSubmit.emit(this.customer);
  }

  get isValid(): string {
    if (
      !this.customer.firstname ||
      !this.customer.lastname ||
      !this.customer.contactType
    ) {
      return 'disabled';
    }
    if (this.customer.contactType === 'mail' && !this.customer.mail) {
      return 'disabled';
    }
    if (this.customer.contactType === 'phone' && !this.customer.phone) {
      return 'disabled';
    }
  }
}
