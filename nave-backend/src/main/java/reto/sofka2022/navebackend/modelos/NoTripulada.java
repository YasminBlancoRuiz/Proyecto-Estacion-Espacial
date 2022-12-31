package reto.sofka2022.navebackend.modelos;

//Componentes externos
import lombok.Data;
import lombok.Setter;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AccessLevel;

@Document(collection = "tb-NoTripulada")
@Data

public class NoTripulada {
    @Id
    @Setter(AccessLevel.NONE) //le establezco acces none para que no pueda modificarse el id
    
    private String _id;
    private int toneladasEmpuje;
    private int velocidad;
    @DBRef private Nave nave;
}
