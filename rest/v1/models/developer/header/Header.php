<?php


class Header
{
    public $header_aid;
    public $header_logo_img;
    public $header_banner_img;
    public $header_nav_a;
    public $header_nav_b;
    public $header_nav_c;
    public $header_nav_d;
    public $header_banner_title;
    public $header_button_text;
    public $header_datetime;

    public $connection;
    public $lastInsertedId;

    public $tblHeader;

    public function __construct($db)
    {
        $this->connection = $db;
        $this->tblHeader = "dcchv1_header";
    }

    public function readAll()
    {
        try {
            $sql = "select * ";
            $sql .= "from ";
            $sql .= "{$this->tblHeader} ";
            $query = $this->connection->query($sql);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    // public function create()
    // {
    //     try {
    //         $sql = "insert into {$this->tblHeader}";
    //         $sql .= "(header_form_email, ";
    //         $sql .= "header_created, ";
    //         $sql .= "header_datetime ) values ( ";
    //         $sql .= ":header_form_email, ";
    //         $sql .= ":header_created, ";
    //         $sql .= ":header_datetime )";
    //         $query = $this->connection->prepare($sql);
    //         $query->execute([
    //             "header_form_email" => $this->header_form_email,
    //             "header_created" => $this->header_created,
    //             "header_datetime" => $this->header_datetime,
    //         ]);
    //         $this->lastInsertedId = $this->connection->lastInsertId();
    //     } catch (PDOException $ex) {
    //         $query = false;
    //     }
    //     return $query;
    // }

    public function update()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_logo_img = :header_logo_img, ";
            $sql .= "header_datetime = :header_datetime ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_logo_img" => $this->header_logo_img,
                "header_datetime" => $this->header_datetime,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }

    public function updateNavigation()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_nav_a = :header_nav_a, ";
            $sql .= "header_nav_b = :header_nav_b, ";
            $sql .= "header_nav_c = :header_nav_c, ";
            $sql .= "header_nav_d = :header_nav_d, ";
            $sql .= "header_datetime = :header_datetime ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_nav_a" => $this->header_nav_a,
                "header_nav_b" => $this->header_nav_b,
                "header_nav_c" => $this->header_nav_c,
                "header_nav_d" => $this->header_nav_d,
                "header_datetime" => $this->header_datetime,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }


    public function updateBanner()
    {
        try {
            $sql = "update {$this->tblHeader} set ";
            $sql .= "header_banner_img = :header_banner_img, ";
            $sql .= "header_banner_title = :header_banner_title, ";
            $sql .= "header_button_text = :header_button_text, ";
            $sql .= "header_datetime = :header_datetime ";
            $sql .= "where header_aid = :header_aid ";
            $query = $this->connection->prepare($sql);
            $query->execute([
                "header_banner_img" => $this->header_banner_img,
                "header_banner_title" => $this->header_banner_title,
                "header_button_text" => $this->header_button_text,
                "header_datetime" => $this->header_datetime,
                "header_aid" => $this->header_aid,
            ]);
        } catch (PDOException $ex) {
            $query = false;
        }
        return $query;
    }
}
