using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace BACK_AUTH.Migrations
{
    /// <inheritdoc />
    public partial class MovieTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Movies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    movieName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    img = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ratings = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    director = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    summary = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    release = table.Column<DateTime>(type: "datetime2", nullable: false),
                    duration = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Movies", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Movies");
        }
    }
}
