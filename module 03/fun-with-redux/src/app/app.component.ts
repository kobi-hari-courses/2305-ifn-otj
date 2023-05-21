import { ChangeDetectionStrategy, ChangeDetectorRef, Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { MyCompComponent } from "./components/my-comp/my-comp.component";
import { Store } from '@ngrx/store';
import { quizFeature } from './redux/quiz/quiz.feature';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [CommonModule, RouterOutlet, MyCompComponent]
})
export class AppComponent {

  constructor(private store: Store){}

  currentQuestion = this.store.selectSignal(quizFeature.selectCurrentQuestion);

}
