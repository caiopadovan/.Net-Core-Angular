import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ],
    providers: [provideHttpClient(),],
    bootstrap: [AppComponent],
})

export class AppModule {}