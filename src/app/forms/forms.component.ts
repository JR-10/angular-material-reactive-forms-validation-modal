import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';

import {
  Country,
  UsernameValidator,
  ParentErrorStateMatcher,
  PasswordValidator,
  PhoneValidator
} from '../validators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class FormsComponent implements OnInit {
  registroForm: FormGroup;
  accountDetailsForm: FormGroup;

  matching_passwords_group: FormGroup;
  country_phone_group: FormGroup;

  productos = ['MP001', 'MP002', 'MP003'];

  validation_messages = {
    productId: [{ type: 'required', message: 'Please select your gender' }],
    secretName: [
      { type: 'required', message: 'Full name is required' },
      {
        type: 'maxlength',
        message: 'secretName cannot be more than 200 characters long'
      }
    ],
    bucketS3: [
      { type: 'required', message: 'Full name is required' },
      {
        type: 'maxlength',
        message: 'bucketS3 cannot be more than 200 characters long'
      }
    ],
    dialect: [
      { type: 'required', message: 'Full name is required' },
      {
        type: 'maxlength',
        message: 'dialect cannot be more than 200 characters long'
      }
    ],
    driverClassName: [
      { type: 'required', message: 'Full name is required' },
      {
        type: 'maxlength',
        message: 'driverClassName cannot be more than 200 characters long'
      }
    ],
    bio: [
      {
        type: 'maxlength',
        message: 'Bio cannot be more than 256 characters long'
      }
    ],
    gender: [{ type: 'required', message: 'Please select your gender' }],
    birthday: [{ type: 'required', message: 'Please insert your birthday' }],
    phone: [
      { type: 'required', message: 'Phone is required' },
      {
        type: 'validCountryPhone',
        message: 'Phone incorrect for the country selected'
      }
    ]
  };

  account_validation_messages = {
    username: [
      { type: 'required', message: 'Username is required' },
      {
        type: 'minlength',
        message: 'Username must be at least 5 characters long'
      },
      {
        type: 'maxlength',
        message: 'Username cannot be more than 25 characters long'
      },
      {
        type: 'pattern',
        message: 'Your username must contain only numbers and letters'
      },
      { type: 'validUsername', message: 'Your username has already been taken' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Enter a valid mail' }
    ],
    confirm_password: [
      { type: 'required', message: 'Confirm password is required' },
      { type: 'areEqual', message: 'Pasword mismatch' }
    ],
    password: [
      { type: 'required', message: 'Pasword is required' },
      {
        type: 'minlength',
        message: 'Password must be at least 5 characters long'
      },
      {
        type: 'pattern',
        message:
          'Your password must containt at least one uppercase, one lowercase, and one number'
      }
    ],
    terms: [
      { type: 'pattern', message: 'You must accept terms and conditions' }
    ]
  };

  constructor(private fb: FormBuilder) {
    this.createForms();
  }

  ngOnInit() {}

  createForms() {
    this.registroForm = this.fb.group({
      productId: new FormControl('', [Validators.required]),
      operations: this.fb.array([this.createTicket()]),
      reportConfiguration: this.fb.group({
        secretName: new FormControl('', [
          Validators.required,
          Validators.maxLength(200)
        ]),
        bucketS3: new FormControl('', [
          Validators.required,
          Validators.maxLength(200)
        ]),
        dialect: new FormControl('', [
          Validators.required,
          Validators.maxLength(200)
        ]),
        driverClassName: new FormControl('', [
          Validators.required,
          Validators.maxLength(200)
        ])
      })
    });
  }

  createTicket(): FormGroup {
    return this.fb.group({
      // keyParameter: [null, Validators.required],
      // valueParameter: [null, Validators.required],

      keyParameter: [null],
      valueParameter: [null]
    });
  }

  onSubmitAccountDetails(value) {
    console.log(value);
  }

  onSubmitUserDetails(value) {
    console.log(value);
  }

  clear() {
    this.registroForm.reset();
  }
}
