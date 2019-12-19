using HealthAPI.Models;
using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthAPI.Data
{
    public class DummyData
    {
        public static void Initialize(IApplicationBuilder app)
        {
            using (var serviceScope = app.ApplicationServices.GetService<IServiceScopeFactory>().CreateScope())
            {
                var context = serviceScope.ServiceProvider.GetService<HealthContext>();
                context.Database.EnsureCreated();

                if (context.Ailments!=null && context.Ailments.Any())
                {
                    return;
                }

                var ailments = DummyData.GetAilments().ToArray();
                context.Ailments.AddRange(ailments);
                context.SaveChanges();

                var medications = DummyData.GetMedications().ToArray();
                context.Medications.AddRange(medications);
                context.SaveChanges();

                var patients = DummyData.GetPatients(context).ToArray();
                context.Patients.AddRange(patients);
                context.SaveChanges();

            }
        }
        public static List<Ailment> GetAilments()
        {
            List<Ailment> ailments = new List<Ailment>()
            {
                new Ailment {Name="Sakit Kepala"},
                new Ailment {Name="Sakit Perut"},
                new Ailment {Name="Sakit Badan"}
            };

            return ailments;
        }

        public static List<Medication> GetMedications()
        {
            List<Medication> medications = new List<Medication>()
        {
            new Medication {Name="Panadol", Doses ="2"},
            new Medication {Name="Paramex", Doses ="3"},
            new Medication {Name="Voltaren", Doses ="5"}
        };
            return medications;
        }

        public static List<Patient> GetPatients(HealthContext db)
        {
            List<Patient> patients = new List<Patient>()
            {
                new Patient
                {
                    Name = "Nama Pasien 1",
                    Ailments = new List<Ailment>(db.Ailments.Take(2)),
                    Medications = new List<Medication>(db.Medications.Take(2))
                },
                new Patient
                {
                    Name = "Nama Pasien 2",
                    Ailments = new List<Ailment>(db.Ailments.Take(1)),
                    Medications = new List<Medication>(db.Medications.OrderBy(m => m.Name).Skip(1).Take(1))
                },
                new Patient
                {
                    Name = "Nama Pasien 2",
                    Ailments = new List<Ailment>(db.Ailments.OrderBy(a => a.Name).Skip(2).Take(2) ),
                    Medications = new List<Medication>(db.Medications.OrderBy(m => m.Name).Skip(1).Take(1))
                }
            };
            return patients;
        }

    }

 
}
