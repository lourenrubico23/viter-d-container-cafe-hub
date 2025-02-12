<?php
class User
{
    public $user_aid;
    public $user_is_active;
    public $user_fname;
    public $user_lname;
    public $user_email;
    public $user_email_new;
    public $user_role_id;
    public $user_key;
    public $user_password;
    public $user_created;
    public $user_datetime;

    public $connection;
    public $lastInsertedId;

    public $user_start;
    public $user_total;
    public $user_search;

    public $tblUser;
    public $tblRole;
    public $tblResponsible;
    public $tblLimitAccessUsers;
    public $tblLimitAccessDepartment;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblUser = "dev_tools_settings_user";
        $this->tblRole = "dev_tools_settings_role";
        $this->tblLimitAccessUsers = "dev_tools_settings_limit_access_users";
        $this->tblLimitAccessDepartment = "dev_tools_settings_limit_access_department";
        $this->tblResponsible = 'dev_tools_settings_responsible'; // table name on database for responsible
    }

    // create
    public function create()
    {
        try {
            $sql = "insert into {$this->tblUser} ";
            $sql .= "( user_fname, ";
            $sql .= "user_lname, ";
            $sql .= "user_is_active, ";
            $sql .= "user_email, ";
            $sql .= "user_role_id, ";
            $sql .= "user_key, ";
            $sql .= "user_created, ";
            $sql .= "user_datetime ) values ( ";
            $sql .= ":user_fname, ";
            $sql .= ":user_lname, ";
            $sql .= ":user_is_active, ";
            $sql .= ":user_email, ";
            $sql .= ":user_role_id, ";
            $sql .= ":user_key, ";
            $sql .= ":user_created, ";
            $sql .= ":user_datetime ) ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_fname" => $this->user_fname,
                "user_lname" => $this->user_lname,
                "user_is_active" => $this->user_is_active,
                "user_email" => $this->user_email,
                "user_role_id" => $this->user_role_id,
                "user_key" => $this->user_key,
                "user_created" => $this->user_created,
                "user_datetime" => $this->user_datetime,
            ]);
            $this->lastInsertedId = $this->connection->lastInsertId();
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read all
    public function readAll()
    {
        try {
            $sql = "select user.user_fname, ";
            $sql .= "user.user_lname, ";
            $sql .= "user.user_is_active, ";
            $sql .= "user.user_email, ";
            $sql .= "user.user_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_aid ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_role_id = role.role_aid ";
            $sql .= "order by user.user_is_active desc, ";
            $sql .= "user.user_fname asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read limit
    public function readLimit()
    {
        try {
            $sql = "select user.user_fname, ";
            $sql .= "user.user_lname, ";
            $sql .= "user.user_is_active, ";
            $sql .= "user.user_email, ";
            $sql .= "user.user_role_id, ";
            $sql .= "role.*, ";
            $sql .= "user.user_aid ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_role_id = role.role_aid ";
            $sql .= "order by user.user_is_active desc, ";
            $sql .= "user.user_fname asc ";
            $sql .= "limit :start, ";
            $sql .= ":total ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "start" => $this->user_start - 1,
                "total" => $this->user_total,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read login
    public function readLogin()
    {
        try {
            $sql = "select user.user_aid, ";
            $sql .= "user.user_is_active, ";
            $sql .= "user.user_fname, ";
            $sql .= "user.user_lname, ";
            $sql .= "user.user_email, ";
            $sql .= "user.user_password, ";
            $sql .= "role.* ";
            $sql .= "from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_role_id = role.role_aid ";
            $sql .= "and user.user_email like :user_email ";
            $sql .= "and user.user_is_active = 1 ";
            // $sql .= "and role.role_is_admin = 1 ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_email" => $this->user_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // search
    public function search()
    {
        try {
            $sql = "select * from {$this->tblUser} as user, ";
            $sql .= "{$this->tblRole} as role ";
            $sql .= "where user.user_role_id = role.role_aid ";
            $sql .= "and ( user.user_fname like :user_fname ";
            $sql .= "or user.user_lname like :user_lname ";
            $sql .= "or user.user_email like :user_email ";
            $sql .= "or concat(user.user_lname, ' ' , user.user_lname) like :fullname ";
            $sql .= ") ";
            $sql .= "order by user.user_is_active desc, ";
            $sql .= "user.user_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_fname" => "%{$this->user_search}%",
                "user_lname" => "%{$this->user_search}%",
                "user_email" => "%{$this->user_search}%",
                "fullname" => "%{$this->user_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function searchUser()
    {
        try {
            $sql = "select ";
            $sql .= "* ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where ";
            $sql .= "user_is_active = 1 ";
            $sql .= "and ( user_fname like :user_fname ";
            $sql .= "or user_lname like :user_lname ";
            $sql .= "or CONCAT(user_fname, ' ', user_lname) like :user_full_name ) ";
            $sql .= "order by ";
            $sql .= "user_lname ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'user_fname' => "%{$this->user_search}%",
                'user_lname' => "%{$this->user_search}%",
                'user_full_name' => "%{$this->user_search}%",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read by id
    public function readById()
    {
        try {
            $sql = "select * from {$this->tblUser} ";
            $sql .= "where user_aid = :user_aid ";
            $sql .= "order by user_fname asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_aid" => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key
    public function readKey()
    {
        try {
            $sql = "select user_key from {$this->tblUser} ";
            $sql .= "where user_key = :user_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_key" => $this->user_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read key for email verification
    public function readKeyChangeEmail()
    {
        try {
            $sql = "select ";
            $sql .= "user_key, ";
            $sql .= "user_email_new ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where user_key = :user_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_key" => $this->user_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // read role
    public function readRole()
    {
        try {
            $sql = "select * from {$this->tblRole} ";
            $sql .= "where role_is_active = 1 ";
            $sql .= "and role_is_user = 1 ";
            $sql .= "order by role_is_active desc, ";
            $sql .= "role_name asc ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function update()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_fname = :user_fname, ";
            $sql .= "user_lname = :user_lname, ";
            $sql .= "user_role_id = :user_role_id, ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_aid  = :user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_fname" => $this->user_fname,
                "user_lname" => $this->user_lname,
                "user_role_id" => $this->user_role_id,
                "user_datetime" => $this->user_datetime,
                "user_aid" => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // update
    public function updateUserKeyAndNewEmail()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_key = :user_key, ";
            $sql .= "user_email_new = :user_email, ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_aid  = :user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_key" => $this->user_key,
                "user_email" => $this->user_email,
                "user_datetime" => $this->user_datetime,
                "user_aid" => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // set password
    public function setPassword()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_password = :user_password, ";
            $sql .= "user_key = '', ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_key  = :user_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_password" => $this->user_password,
                "user_datetime" => $this->user_datetime,
                "user_key" => $this->user_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // reset password
    public function resetPassword()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_key = :user_key, ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_email  = :user_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_key" => $this->user_key,
                "user_datetime" => $this->user_datetime,
                "user_email" => $this->user_email,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // active
    public function active()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_is_active = :user_is_active, ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_aid = :user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_is_active" => $this->user_is_active,
                "user_datetime" => $this->user_datetime,
                "user_aid" => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // delete
    public function delete()
    {
        try {
            $sql = "delete from {$this->tblUser} ";
            $sql .= "where user_aid = :user_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_aid" => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // validator

    // email
    public function checkEmail()
    {
        try {
            $sql = "select user_email from {$this->tblUser} ";
            $sql .= "where user_email = :user_email ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_email" => "{$this->user_email}",
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateEmailForUser()
    {
        try {
            $sql = "update {$this->tblUser} set ";
            $sql .= "user_email = :user_email, ";
            $sql .= "user_email_new = '', ";
            $sql .= "user_key = '', ";
            $sql .= "user_datetime = :user_datetime ";
            $sql .= "where user_key = :user_key ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_email" => $this->user_email,
                "user_datetime" => $this->user_datetime,
                "user_key" => $this->user_key,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function filterStatus()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where user_is_active = :user_is_active  ";
            $sql .= "order by user_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_is_active" => $this->user_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterStateSearch()
    {
        try {
            $sql = "select * ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where ";
            $sql .= "user_is_active = :user_is_active ";
            $sql .= "and user_fname like :user_fname ";
            $sql .= "and user_lname like :user_lname ";
            $sql .= "order by user_is_active desc, ";
            $sql .= "user_name asc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "user_fname" => "%{$this->user_search}%",
                "user_lname" => "%{$this->user_search}%",
                "user_is_active" => $this->user_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function filterIsActive()
    {
        try {
            $sql = "select ";
            $sql .= "user_aid, ";
            $sql .= "user_is_active, ";
            $sql .= "user_fname, ";
            $sql .= "user_lname ";
            $sql .= "from {$this->tblUser} ";
            $sql .= "where ";
            $sql .= "user_is_active = :user_is_active ";
            $sql .= "order by ";
            $sql .= "user_is_active desc ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'user_is_active' => $this->user_is_active,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readUserLimitAccess($user_aid)
    {
        try {
            $sql = "select ";
            $sql .= "limit_access_users_menu_code, ";
            $sql .= "limit_access_users_sub_menu_code, ";
            $sql .= "limit_access_users_item_code, ";
            $sql .= "limit_access_users_sub_item_code ";
            $sql .= "from {$this->tblLimitAccessUsers} ";
            $sql .= "where ";
            $sql .= "limit_access_users_id = :limit_access_users_id ";
            $sql .= "order by ";
            $sql .= "limit_access_users_is_active desc, ";
            $sql .= "limit_access_users_menu,  ";
            $sql .= "limit_access_users_sub_menu,  ";
            $sql .= "limit_access_users_item,  ";
            $sql .= "limit_access_users_sub_item  ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "limit_access_users_id" => $user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readResponsibleByUserId($user_aid)
    {
        try {
            $sql = "select ";
            $sql .= "responsible_department_id, ";
            $sql .= "responsible_photo ";
            $sql .= "from {$this->tblResponsible} ";
            $sql .= "where ";
            $sql .= "responsible_user_id = :responsible_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'responsible_user_id' => $user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function readDepartmentLimitAccessByUserId($user_aid)
    {
        try {
            $sql = "select ";
            $sql .= "limit_access_department_id ";
            $sql .= "from {$this->tblLimitAccessDepartment} ";
            $sql .= "where ";
            $sql .= "limit_access_department_users_id = :limit_access_department_users_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'limit_access_department_users_id' => $user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function checkAssociation()
    {
        try {
            $sql = "select ";
            $sql .= "responsible_user_id ";
            $sql .= "from {$this->tblResponsible} ";
            $sql .= "where ";
            $sql .= "responsible_user_id = :responsible_user_id ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                'responsible_user_id' => $this->user_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
