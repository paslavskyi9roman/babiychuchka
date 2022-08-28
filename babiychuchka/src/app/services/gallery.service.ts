import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

import { Painting } from '../shared/models/painting.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private paintings: Painting[] = [];
  private paintingsStorage$ = new Subject<Painting[]>();
  public paintings$ = this.paintingsStorage$.asObservable();
  private readonly url = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}

  public getPaintings() {
    this.http
      .get<{ message: string; paintings: Painting[] }>(`${this.url}/paintings`)
      .pipe(
        map((postData) => {
          return postData.paintings.map((paintings) => {
            return {
              id: paintings.id,
              title: paintings.title,
              description: paintings.description,
              available: paintings.available,
              imgUrl: paintings.imgUrl,
            };
          });
        }),
      )
      .subscribe((data) => {
        this.paintings = data;
        this.paintingsStorage$.next([...this.paintings]);
      });
  }

  public getPaintinById(id: string) {
    return { ...this.paintings.find((p) => p.id === id) };
  }

  public addPainting(painting: Painting): void {
    this.http.post<{ message: string }>(`${this.url}/paintings`, painting).subscribe(() => {
      this.paintings.push(painting);
      this.paintingsStorage$.next([...this.paintings]);
    });
  }

  public editPainting(painting: Painting): void {
    this.http.put(`${this.url}/paintings` + painting.id, painting).subscribe((response) => {
      console.log(response);
    });
  }

  public deletePainting(paintingId: string): void {
    this.http.delete(`${this.url}/paintings` + paintingId).subscribe(() => {
      const updatedPaintings = this.paintings.filter((painting) => painting.id !== paintingId);
      this.paintings = updatedPaintings;
      this.paintingsStorage$.next([...this.paintings]);
    });
  }
}
