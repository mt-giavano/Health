using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using HealthAPI.Data;
using HealthAPI.Models;

namespace HealthAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicationsController : ControllerBase
    {
        private readonly HealthContext _context;

        public MedicationsController(HealthContext context)
        {
            _context = context;
        }

        // GET: api/Medications
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Medication>>> GetMedications()
        {
            return await _context.Medications.ToListAsync();
        }

        // GET: api/Medications/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Medication>> GetMedication(string id)
        {
            var medication = await _context.Medications.FindAsync(id);

            if (medication == null)
            {
                return NotFound();
            }

            return medication;
        }

        // PUT: api/Medications/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMedication(string id, Medication medication)
        {
            if (id != medication.Name)
            {
                return BadRequest();
            }

            _context.Entry(medication).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!MedicationExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Medications
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Medication>> PostMedication(Medication medication)
        {
            _context.Medications.Add(medication);
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateException)
            {
                if (MedicationExists(medication.Name))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtAction("GetMedication", new { id = medication.Name }, medication);
        }

        // DELETE: api/Medications/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Medication>> DeleteMedication(string id)
        {
            var medication = await _context.Medications.FindAsync(id);
            if (medication == null)
            {
                return NotFound();
            }

            _context.Medications.Remove(medication);
            await _context.SaveChangesAsync();

            return medication;
        }

        private bool MedicationExists(string id)
        {
            return _context.Medications.Any(e => e.Name == id);
        }
    }
}
