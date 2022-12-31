package reto.sofka2022.navebackend.respositorios;

import org.springframework.data.mongodb.repository.MongoRepository;

import reto.sofka2022.navebackend.modelos.Lanzadera;
import reto.sofka2022.navebackend.modelos.Nave;

public interface RepoLanzadera extends MongoRepository <Lanzadera, String> {
    
}
