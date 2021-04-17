import { Injectable } from "@angular/core";
import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from "rxjs";

export interface Contacto {
    nombre: string;
    apellido: string;
    email: string;
    pais: string;
    mensaje: string;
    id: string;
    data: string;
}

@Injectable()
export class DataServices {
    contact!: Observable<Contacto>;
    private contactCollection: AngularFirestoreCollection<Contacto>;


    constructor(private readonly afs: AngularFirestore) {
        this.contactCollection = afs.collection<Contacto>('contactosweb');
    }

    async onSaveContacto(contactoForm: Contacto): Promise<void> {
        return new Promise(async (resolve, rejects) => {
            try {
                const id = this.afs.createId();
                const data = { ...contactoForm };
                const result = this.contactCollection.doc(id).set(data);
                resolve(result);
            }
            catch (error) {
                rejects(error.message);
            }

        });
    }
}