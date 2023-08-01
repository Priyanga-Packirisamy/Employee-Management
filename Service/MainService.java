package com.priyanga.appdevelopment.Service;

import com.priyanga.appdevelopment.Entity.*;
import com.priyanga.appdevelopment.Repository.EmployeeMainRepo;
import com.priyanga.appdevelopment.Repository.LeaverRepo;
import com.priyanga.appdevelopment.Repository.MeetingRepo;
import com.priyanga.appdevelopment.Repository.TaskRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class MainService {
    @Autowired
    private EmployeeMainRepo er;

    @Autowired
    private TaskRepo tr;

    @Autowired
    private MeetingRepo mr;

    @Autowired
    private LeaverRepo lr;

    public EmployeeMain postMain(EmployeeMain em){
        return er.save(em);
    }

    public List<EmployeeMain> getMain(){
        return er.findAll();
    }

    public EmployeeMain getByIdMain(int id){
        return er.findById(id).get();
    }

    public List<EmployeeMain> sameDepartment(int id){
        return er.sameDepartment(id);
    }

    public void putMain(int id,EmployeeMain em){
        er.saveAndFlush(em);
    }

    public void deleteMain(int id){
        er.deleteById(id);
    }

    public List<EmployeeList> getEmployeeDetails() {
        List<Object[]> result = er.getEmployeeDetails();

        List<EmployeeList> employeeDetailsList = new ArrayList<>();
        for (Object[] row : result) {
            int employee_id = (int) row[0];
            String first_name = (String) row[1];
            String manager_name = (String) row[2];
            String position = (String) row[3];
            String dept_name = (String) row[4];
            String office = (String) row[5];

            EmployeeList employeeDetails = new EmployeeList(employee_id, first_name, manager_name, position, dept_name, office);
            employeeDetailsList.add(employeeDetails);
        }

        return employeeDetailsList;

    }

    public List<EmployeeList> getEmployeeDetailsDept(int id) {
        List<Object[]> result = er.getEmployeeDetailsDept(id);

        List<EmployeeList> employeeDetailsList = new ArrayList<>();
        for (Object[] row : result) {
            int employee_id = (int) row[0];
            String first_name = (String) row[1];
            String manager_name = (String) row[2];
            String position = (String) row[3];
            String dept_name = (String) row[4];
            String office = (String) row[5];

            EmployeeList employeeDetails = new EmployeeList(employee_id, first_name, manager_name, position, dept_name, office);
            employeeDetailsList.add(employeeDetails);
        }

        return employeeDetailsList;

    }

    //Task Service

    public void postTask(Task t){
        tr.save(t);
    }
    public List<Task> getTask(){
        return tr.findAll();
    }
    public void deleteTask(int id){
        tr.deleteById(id);
    }

    public List<Task> getTaskById(int id) {
        return tr.getTaskByEmpId(id);
    }

    //Meeting Service

    public void postMeet(Meeting m){
        mr.save(m);
    }
    public List<Meeting> getMeet(){
        return mr.findAll();
    }
    public void deleteMeeting(int id){
        mr.deleteById(id);
    }

    public List<Meeting> getMeetByEmpId(int id){
       return mr.getMeetByEmpId(id);
    }

    //Leave Service

    public void postLeave(Leaver l){
        lr.save(l);
    }
    public List<Leaver> getLeave(){
        return lr.findAll();
    }
    public void deleteLeave(int id){
        lr.deleteById(id);
    }

    public List<Leaver> getLeaveByEmpId(int id){
        return lr.getLeaveByEmpId(id);
    }
}
