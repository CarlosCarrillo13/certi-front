import { Component, OnInit } from '@angular/core';
import { SolverService } from './solver.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { Request } from './request';


@Component({
  selector: 'app-solver',
  templateUrl: './solver.component.html',
  styleUrls: ['./solver.component.css']
})
export class SolverComponent implements OnInit {
 answer: string;
 input: number;
 solverForm: FormGroup;
 request: Request = new Request();

  constructor(private _solverService: SolverService, private router: Router, private fb: FormBuilder) {
    this.createForm();
   }
   createForm() {
    this.solverForm = this.fb.group({
      number: ['', Validators.required ]
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    this.request.number = this.input;
    this._solverService.register(this.request)
    .subscribe(
      response => {
        this.answer = response as string;
        console.log('hellooo' + response);
        swal.fire('Closest path solved', `${this.answer}`, 'success')
    },
      error => swal.fire({ type: 'error',
      title: 'Error submitting',
      text: 'input fields cannot be empty' })
      );
      console.log('hellooo' + this.answer);
  }
}
