package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "personal_detail")
public class PersonalDetail {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int personal_id;
    @Column(name ="first_name" , nullable = false , length = 100)
    private String first_name;
    @Column(name ="last_name" , nullable = false , length = 100)
    private String last_name;
    @Column(name ="dob" , nullable = false)
    private String dob;
    @Column(name ="marital_status" , nullable = false , length = 100)
    private String marital_status;
    @Column(name ="email" , nullable = false , length = 100)
    private String email;
    @Column(name ="pass" , nullable = false , length = 20)
    private String pass;

    public int getPersonal_id() {
        return personal_id;
    }

    public void setPersonal_id(int id) {
        this.personal_id = personal_id;
    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getMarital_status() {
        return marital_status;
    }

    public void setMarital_status(String marital_status) {
        this.marital_status = marital_status;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public PersonalDetail() {

    }

    public PersonalDetail(int personal_id, String first_name, String last_name, String dob, String marital_status, String email, String pass) {
        super();
        this.personal_id = personal_id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.dob = dob;
        this.marital_status = marital_status;
        this.email = email;
        this.pass = pass;
    }
}
