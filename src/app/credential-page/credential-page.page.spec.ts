import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CredentialPagePage } from './credential-page.page';

describe('CredentialPagePage', () => {
  let component: CredentialPagePage;
  let fixture: ComponentFixture<CredentialPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CredentialPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CredentialPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
