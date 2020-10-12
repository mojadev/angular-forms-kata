import {
  TestBed,
  async,
  ComponentFixture,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { Customer } from './domain';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent],
    }).compileComponents();
  }));

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    fixture.whenStable();
  }));

  it('should emit a customer with a mail adress when filling all required forms and submitting', fakeAsync(() => {
    const submitSpy = jasmine.createSpy('submit');
    const firstname: HTMLInputElement = fixture.debugElement.query(
      By.css('#first_name')
    ).nativeElement;
    const lastname: HTMLInputElement = fixture.debugElement.query(
      By.css('#last_name')
    ).nativeElement;
    const radio: HTMLInputElement = fixture.debugElement.query(
      By.css('input[type=radio][value="mail"]')
    ).nativeElement;

    firstname.value = 'First';
    firstname.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    lastname.value = 'Last';
    lastname.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    radio.dispatchEvent(new Event('change', { bubbles: true }));
    fixture.detectChanges();
    tick();

    const mail: HTMLInputElement = fixture.debugElement.query(By.css('#mail'))
      .nativeElement;
    mail.value = 'test@me.de';
    mail.dispatchEvent(new Event('input', { bubbles: true }));
    fixture.detectChanges();

    fixture.componentInstance.onSubmit.subscribe(submitSpy);
    fixture.debugElement
      .query(By.css('#submit_btn'))
      .triggerEventHandler('click', {});

    expect(submitSpy).toHaveBeenCalledWith({
      firstname: 'First',
      lastname: 'Last',
      contactType: 'mail',
      mail: 'test@me.de',
    } as Customer);
  }));
});
