package com.yeargun.auth.postrecommendation;

import com.yeargun.auth.auth.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


//DOCUMENT BASED MAYBE. @ me in case you change the db. I am very sorry (yeargun)
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="Post")
public class Post {
    @Id
    @GeneratedValue
    private int id;
    @OneToMany
    private List<User> userIds;
    private String postUrl;
//    private List<Comment> comments;
//    private AccessRule accessRule;
//    private HashMap<PostContent, PostType> postContents;




}
