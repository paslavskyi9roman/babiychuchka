import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Subject } from 'rxjs';

import { Painting, PaintingResponse } from '../shared/models/painting.model';

@Injectable({
  providedIn: 'root',
})
export class GalleryService {
  private paintings: Painting[] = [];
  private paintingsStorage$ = new Subject<Painting[]>();
  public paintings$ = this.paintingsStorage$.asObservable();

  private readonly url = `http://localhost:3000/api`;

  constructor(private http: HttpClient) {}

  public getPaintings(): void {
    this.http
      .get<{ message: string; paintings: PaintingResponse[] }>(`${this.url}/paintings`)
      .pipe(
        map((postData) => {
          return postData.paintings.map((paintings) => {
            return {
              id: paintings._id,
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

  public getPaintingById(id: string) {
    return { ...this.paintings.find((p: Painting) => p.id === id) };
  }

  public getPainting(id: string) {
    return this.http.get(`${this.url}/paintings/` + id);
  }

  public addPainting(painting: Painting): void {
    this.http.post<{ message: string; id: string }>(`${this.url}/paintings`, painting).subscribe((response) => {
      painting.id = response.id;
      this.paintings.push(painting);
      this.paintingsStorage$.next([...this.paintings]);
    });
  }

  public editPainting(painting: Painting): void {
    this.http.put(`${this.url}/paintings/` + painting.id, painting).subscribe((response) => {
      const updatedPaintings = [...this.paintings];
      const oldPostIndex = updatedPaintings.findIndex((p: Painting) => p.id === painting.id);
      updatedPaintings[oldPostIndex] = painting;
      this.paintings = updatedPaintings;
      this.paintingsStorage$.next([...this.paintings]);
    });
  }

  public deletePainting(paintingId: string): void {
    this.http.delete(`${this.url}/paintings/` + paintingId).subscribe(() => {
      this.paintings = this.paintings.filter((painting: Painting) => painting.id !== paintingId);
      this.paintingsStorage$.next([...this.paintings]);
    });
  }
}
