using System.ComponentModel.DataAnnotations;

namespace api.Models;

public record AppUser(
    // [property: BsonId, BsonRepresentation(BsonType.ObjectId)] string? Id, //hamishe sabet
    [MinLength(3), MaxLength(20)] string? Name,
    [EmailAddress] string Email,
    [MinLength(8)] string Password,
    [Range(18, 99)] int Age,
    bool IsAdmin
);
