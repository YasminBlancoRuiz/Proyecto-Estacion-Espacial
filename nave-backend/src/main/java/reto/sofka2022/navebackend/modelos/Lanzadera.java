package reto.sofka2022.navebackend.modelos;

import lombok.Data;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;

@Document(collection = "tb-Lanzadera")
@Data
public class Lanzadera {

    @Id
    @Setter(AccessLevel.NONE) //le establezco acces none para que no pueda modificarse el id
    
    private String _id;
    private int potencia;
    private int toneladasEmpuje;
    private int toneladasPeso;
    private int altura;
    private int capacidadToneladas;
    @DBRef private Nave nave;
    
}
