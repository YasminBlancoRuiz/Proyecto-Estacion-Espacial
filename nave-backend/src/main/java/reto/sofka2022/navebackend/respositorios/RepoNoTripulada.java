package reto.sofka2022.navebackend.respositorios;

import org.springframework.data.mongodb.repository.MongoRepository;

import reto.sofka2022.navebackend.modelos.NoTripulada;

public interface RepoNoTripulada extends MongoRepository <NoTripulada, String> {
      
}
