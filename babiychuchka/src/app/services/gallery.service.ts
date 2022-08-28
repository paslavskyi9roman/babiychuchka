import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, Subject, take } from 'rxjs';

import { Painting } from '../shared/models/painting.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private paintingsStorage$ = new Subject<Painting[]>();
  public paintings$ = this.paintingsStorage$.asObservable();
  private readonly url = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}

  public getPaintings() {
    this.http.get<{ message: string; paintings: Painting[] }>(`${this.url}/paintings`).subscribe((data) => {
      this.paintingsStorage$.next([...data.paintings]);
    });
  }

  public getPaintinById(id: string): Observable<Painting[]> {
    return this.paintings$.pipe(map((painting) => painting.filter((el) => el.id === id)));
  }

  public addPainting(painting: Painting): void {
    this.http.post<{ message: string }>(`${this.url}/paintings`, painting).subscribe((data) => {
      this.paintings$.pipe(take(1)).subscribe((data) => {
        this.paintingsStorage$.next([...data, painting]);
      });
    });
    this.getPaintings();
  }

  public editPainting(painting: Painting): void {
    this.http.put(`${this.url}/paintings` + painting.id, painting).subscribe((response) => {
      console.log(response);
    });
  }

  public deletePaintings(paintingId: string): void {
    this.http.delete(`${this.url}/paintings` + paintingId).subscribe(() => {
      this.getPaintings();
    });
  }
}
