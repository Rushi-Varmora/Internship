using System.ComponentModel.DataAnnotations;

namespace BACK_AUTH.Models
{
    public class Movie
    {

        [Key]
        public int Id { get; set; }
        public string movieName { get; set; }

        public string img { get; set; }

        public string ratings { get; set; }

        public string director { get; set; }

        public string summary { get; set; }

        public string release { get; set; }

        public int duration { get; set; }
        

    }
}
