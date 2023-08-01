package com.priyanga.appdevelopment.Controller;

import com.priyanga.appdevelopment.Entity.*;
import com.priyanga.appdevelopment.Service.MainService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@CrossOrigin("http://localhost:3000")
@RestController
public class MainController {
    @Autowired
    private MainService ms;

    @PostMapping("/postMain")
    public EmployeeMain postMain(@RequestBody EmployeeMain em){
        return ms.postMain(em);
    }

    @GetMapping("/getMain")
    public List<EmployeeMain> getMain(){
        return ms.getMain();
    }

    @GetMapping("/getByIdMain/{id}")
    public EmployeeMain getByIdMain(@PathVariable int id){
        return ms.getByIdMain(id);
    }

    @GetMapping("/sameDepartment/{id}")
    public List<EmployeeMain> sameDepartment(@PathVariable int id){
        return ms.sameDepartment(id);
    }
    @PutMapping("/putMain/{id}")
    public String putMain(@PathVariable int id, @RequestBody EmployeeMain em){
        ms.putMain(id,em);
        return "value updated";
    }

    @DeleteMapping("/deleteMain/{id}")
    public String deleteMain(@PathVariable int id){
        ms.deleteMain(id);
        return "value deleted";
    }

    @GetMapping("/details")
    public List<EmployeeList> getEmployeeDetails() {
        List<EmployeeList> employeeDetailsList = ms.getEmployeeDetails();
        return employeeDetailsList;
    }

    @GetMapping("/getAllDept/{id}")
    public List<EmployeeList> getEmployeeDetailsDept(@PathVariable int id) {
        return ms.getEmployeeDetailsDept(id);
    }


//    Task Controller

    @PostMapping("/postTask")
    public String postTask(@RequestBody Task t){
        ms.postTask(t);
        return "value added";
    }

    @GetMapping("/getTask")
    public List<Task> getTask(){
        return ms.getTask();
    }

    @DeleteMapping("/deleteTask/{id}")
    public String deleteTask(@PathVariable int id){
        ms.deleteTask(id);
        return "value deleted";
    }

    @GetMapping("/getTaskById/{id}")
    public List<Task> getTaskById(@PathVariable int id) {
        return ms.getTaskById(id);
    }

    //Meeting Controller

    @PostMapping("/postMeet")
    public String postMeet(@RequestBody Meeting m){
        ms.postMeet(m);
        return "value added";
    }

    @GetMapping("/getMeet")
    public List<Meeting> getMeet(){
        return ms.getMeet();
    }

    @DeleteMapping("/deleteMeet/{id}")
    public String deleteMeet(@PathVariable int id){
        ms.deleteMeeting(id);
        return "value deleted";
    }

    @GetMapping("/getMeetByEmpId/{id}")
    public List<Meeting> getMeetByEmpId(@PathVariable int id) {
        return ms.getMeetByEmpId(id);
    }

    //Leave Controller

    @PostMapping("/postLeave")
    public String postLeave(@RequestBody Leaver l){
        ms.postLeave(l);
        return "value added";
    }

    @GetMapping("/getLeave")
    public List<Leaver> getLeave(){
        return ms.getLeave();
    }

    @DeleteMapping("/deleteLeave/{id}")
    public String deleteLeave(@PathVariable int id){
        ms.deleteLeave(id);
        return "value deleted";
    }

    @GetMapping("/getLeaveByEmpId/{id}")
    public List<Leaver> getLeaveByEmpId(@PathVariable int id) {
        return ms.getLeaveByEmpId(id);
    }
}
