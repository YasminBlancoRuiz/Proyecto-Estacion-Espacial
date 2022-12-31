package reto.sofka2022.navebackend.controladores;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;


import lombok.extern.apachecommons.CommonsLog;
import reto.sofka2022.navebackend.modelos.Tripulada;
import reto.sofka2022.navebackend.modelos.Nave;
import reto.sofka2022.navebackend.respositorios.RepoTripulada;
import reto.sofka2022.navebackend.respositorios.RepoNave;

@CommonsLog
@RestController
@CrossOrigin
@RequestMapping("/tripulada")

public class ControladorTripulada {

    //Este metodo sirve para listar todas las naves  tripuladas
    @Autowired private RepoTripulada repositorioTripulada;
    @Autowired private RepoNave repositorioNave;

    private String message;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<Tripulada> index(){  //asociada a una petición de tipo get, un listado de usuarios me devuelve
        log.debug(message="[GET /tripulada]");
        List<Tripulada> l = null;
        try{
            l = repositorioTripulada.findAll();
        }
        catch (Exception e){
            log.error("[GET /tripulada]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());            
        }
        return l;
    }

    //Este metodo sirve para listar todas las naves tripuladas por id
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}")
    public Tripulada retrieve (@PathVariable String id){  //asociada a una petición de tipo get
        log.debug(message="[GET /tripulada/" + id +"]");     
        Tripulada u = repositorioTripulada.findById(id).orElse(null);
        System.out.println("Este es el id de controlador "+u);
        if(u == null){
            log.error("[GET /tripulada/" + id +"] La nave tripulada no pudo ser intanciada");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "La nave tripulada no fue encontrada");
        }
        return u;
    }

    //Este metodo sirve para crear todas las naves tripuladas 
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Tripulada create (@RequestBody Tripulada infoTripulada){ //asociada a una petición de tipo Post
        log.debug(message="[POST /tripulada]");
        Tripulada u = null;
        try {
           u = repositorioTripulada.save(infoTripulada);
            
        } catch (Exception e) {
            log.error("[POST /tripulada]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());    
        }
        return u;
    }
    
}
