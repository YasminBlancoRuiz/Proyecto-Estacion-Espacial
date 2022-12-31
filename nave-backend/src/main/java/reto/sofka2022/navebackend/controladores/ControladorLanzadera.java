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
import reto.sofka2022.navebackend.modelos.Lanzadera;
import reto.sofka2022.navebackend.modelos.Nave;
import reto.sofka2022.navebackend.respositorios.RepoLanzadera;
import reto.sofka2022.navebackend.respositorios.RepoNave;

@CommonsLog
@RestController
@CrossOrigin
@RequestMapping("/lanzadera")

public class ControladorLanzadera {


    //Este metodo sirve para listar todas las naves lanzaderas
    @Autowired private RepoLanzadera repositorioLanzadera;
    @Autowired private RepoNave repositorioNave;

    private String message;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<Lanzadera> index(){  //asociada a una petición de tipo get, un listado de usuarios me devuelve
        log.debug(message="[GET /lanzadera]");
        List<Lanzadera> l = null;
        try{
            l = repositorioLanzadera.findAll();
        }
        catch (Exception e){
            log.error("[GET /lanzadera]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());            
        }
        return l;
    }

     //Este metodo sirve para listar todas las naves por id
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}")
    public Lanzadera retrieve (@PathVariable String id){  //asociada a una petición de tipo get
         log.debug(message="[GET /lanzadera/" + id +"]");     
         Lanzadera u = repositorioLanzadera.findById(id).orElse(null);
         System.out.println("Este es el id de controlador "+u);
         if(u == null){
             log.error("[GET /lanzadera/" + id +"] La nave lanzadera no pudo ser intanciada");
             throw new ResponseStatusException(HttpStatus.NOT_FOUND, "La nave lanzadera no fue encontrada");
         }
         return u;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Lanzadera create (@RequestBody Lanzadera infoLanzadera){ //asociada a una petición de tipo Post
        log.debug(message="[POST /lanzadera]");
        Lanzadera u = null;
        try {
           u = repositorioLanzadera.save(infoLanzadera);
            
        } catch (Exception e) {
            log.error("[POST /lanzadera]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());    
        }
        return u;
    }
    
}
