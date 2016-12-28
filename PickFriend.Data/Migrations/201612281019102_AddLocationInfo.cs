namespace PickFriend.Data.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddLocationInfo : DbMigration
    {
        public override void Up()
        {
            RenameColumn(table: "dbo.UserInfoes", name: "Id", newName: "UserId");
            RenameIndex(table: "dbo.UserInfoes", name: "IX_Id", newName: "IX_UserId");
            CreateTable(
                "dbo.LocationInfoes",
                c => new
                    {
                        UserId = c.String(nullable: false, maxLength: 128),
                        Online = c.Boolean(nullable: false),
                        Latitude = c.Double(nullable: false),
                        Longitude = c.Double(nullable: false),
                    })
                .PrimaryKey(t => t.UserId)
                .ForeignKey("dbo.AspNetUsers", t => t.UserId)
                .Index(t => t.UserId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.LocationInfoes", "UserId", "dbo.AspNetUsers");
            DropIndex("dbo.LocationInfoes", new[] { "UserId" });
            DropTable("dbo.LocationInfoes");
            RenameIndex(table: "dbo.UserInfoes", name: "IX_UserId", newName: "IX_Id");
            RenameColumn(table: "dbo.UserInfoes", name: "UserId", newName: "Id");
        }
    }
}
