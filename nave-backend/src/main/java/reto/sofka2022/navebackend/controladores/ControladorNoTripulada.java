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
import reto.sofka2022.navebackend.modelos.NoTripulada;
import reto.sofka2022.navebackend.modelos.Nave;
import reto.sofka2022.navebackend.respositorios.RepoNoTripulada;
import reto.sofka2022.navebackend.respositorios.RepoNave;

@CommonsLog
@RestController
@CrossOrigin
@RequestMapping("/notripulada")

public class ControladorNoTripulada {

    //Este metodo sirve para listar todas las naves no tripuladas
    @Autowired private RepoNoTripulada repositorioNotripulada;
    @Autowired private RepoNave repositorioNave;
    
    private String message;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<NoTripulada> index(){  //asociada a una petición de tipo get, un listado de usuarios me devuelve
        log.debug(message="[GET /notripulada]");
        List<NoTripulada> l = null;
        try{
            l = repositorioNotripulada.findAll();
        }
        catch (Exception e){
            log.error("[GET /notripulada]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());            
        }
        return l;
    }

    //Este metodo sirve para listar todas las naves no tripuladas por id
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}")
    public NoTripulada retrieve (@PathVariable String id){  //asociada a una petición de tipo get
        log.debug(message="[GET /notripulada/" + id +"]");     
        NoTripulada u = repositorioNotripulada.findById(id).orElse(null);
        System.out.println("Este es el id de controlador "+u);
        if(u == null){
            log.error("[GET /notripulada/" + id +"] La nave no tripulada no pudo ser intanciada");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "La nave no tripulada no fue encontrada");
        }
        return u;
    }

    //Este metodo sirve para crear todas las naves no tripuladas 
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public NoTripulada create (@RequestBody NoTripulada infoNoTripulada){ //asociada a una petición de tipo Post
        log.debug(message="[POST /notripulada]");
        NoTripulada u = null;
        try {
           u = repositorioNotripulada.save(infoNoTripulada);
            
        } catch (Exception e) {
            log.error("[POST /notripulada]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());    
        }
        return u;
    }
    
}
