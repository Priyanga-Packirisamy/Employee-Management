package com.priyanga.appdevelopment.Entity;

import jakarta.persistence.*;

@Entity
@Table(name = "contact_detail")
public class ContactDetail {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int contact_id;

    @Column(name ="email" , nullable = false , length = 100)
    private String email_id;
    @Column(name ="phone" , nullable = false , length = 15)
    private String phone;
    @Column(name ="github" , nullable = false , length = 200)
    private String github;
    @Column(name ="linkedin" , nullable = false , length = 200)
    private String linkedin;

    public ContactDetail() {

    }

    public ContactDetail(int contact_id, String email_id, String phone, String github, String linkedin) {
        super();
        this.contact_id = contact_id;
        this.email_id = email_id;
        this.phone = phone;
        this.github = github;
        this.linkedin = linkedin;
    }

    public int getContact_idId() {
        return contact_id;
    }

    public void setContact_idId(int contact_id) {
        this.contact_id = contact_id;
    }

    public String getEmail_id() {
        return email_id;
    }

    public void setEmail_id(String email_id) {
        this.email_id = email_id;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getGithub() {
        return github;
    }

    public void setGithub(String github) {
        this.github = github;
    }

    public String getLinkedin() {
        return linkedin;
    }

    public void setLinkedin(String linkedin) {
        this.linkedin = linkedin;
    }
}
