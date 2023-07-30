import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardBoxComponent } from './components/card-box/card-box.component';
import { CarouselItemsComponent } from './components/carousel-items/carousel-items.component';
import { AmountBoxComponent } from './components/amount-box/amount-box.component';
import { SvgComponentsModule } from 'src/assets/svgs/svg.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    CardBoxComponent,
    CarouselItemsComponent,
    AmountBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SvgComponentsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
