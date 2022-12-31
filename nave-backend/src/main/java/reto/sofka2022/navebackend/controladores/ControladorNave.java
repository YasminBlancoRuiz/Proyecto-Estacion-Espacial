package reto.sofka2022.navebackend.controladores;


import java.util.List;

import javax.print.attribute.standard.MediaSize.Other;

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
import reto.sofka2022.navebackend.modelos.Nave;
import reto.sofka2022.navebackend.respositorios.RepoNave;


@CommonsLog
@RestController
@CrossOrigin
@RequestMapping("/nave")

public class ControladorNave {
    
    //Este metodo sirve para listar todas las naves
    @Autowired private RepoNave repositorioNave;
    private String message;

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("")
    public List<Nave> index(){  //asociada a una petición de tipo get, un listado de usuarios me devuelve
        log.debug(message="[GET /nave]");
        List<Nave> l = null;
        try{
            l = repositorioNave.findAll();
        }
        catch (Exception e){
            log.error("[GET /nave]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());
            
        }
        return l;
    }

    //Este metodo sirve para listar todas las naves por id
    @ResponseStatus(HttpStatus.OK)
    @GetMapping("{id}")
    public Nave retrieve (@PathVariable String id){  //asociada a una petición de tipo get
        log.debug(message="[GET /nave/" + id +"]");     
        Nave u = repositorioNave.findById(id).orElse(null);
        System.out.println("Este es el id de controlador "+u);
        if(u == null){
            log.error("[GET /nave/" + id +"] La nave no pudo ser intanciada");
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "La nave no fue encontrada");
        }
        return u;
    }

    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    public Nave create (@RequestBody Nave infoNave){ //asociada a una petición de tipo Post
        log.debug(message="[POST /nave]");
        Nave u = null;
        try {
           u = repositorioNave.save(infoNave);
            
        } catch (Exception e) {
            log.error("[POST /nave]" + e.getMessage() + " -> " + e.getCause());
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, e.getCause().getMessage(), e.getCause());    
        }
        return u;
    }


}
